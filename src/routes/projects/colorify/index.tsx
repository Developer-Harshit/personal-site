import {
    component$,
    useStore,
    useSignal,
    useVisibleTask$,
    $,
		useStylesScoped$,
  } from '@builder.io/qwik'
  import Manipulator from './main'
	import Styles from "./style.css?inline"
  export default component$(() => {
		useStylesScoped$(Styles)

    const modes = [
      { val: 0, id: 'near', text: 'Nearest Color' },
      { val: 1, id: 'lumi', text: 'By Luminance' },
      { val: 2, id: 'bw', text: 'Black & White' },
    ]
  
    const loaded = useSignal(false)
    const loop = useSignal(false)
    const finished = useSignal(false)
    const rmode = useSignal(0)
    const store = useStore({
      palette: [
        '#003049',
        '#d62827',
        '#f77f00',
        '#fdbf49',
        '#eae2b7',
  
        '#173f5f',
        '#20639b',
        '#3caea3',
        '#f6d55c',
        '#ed553b',
      ],
      loaded,
      loop,
      finished,
      rmode,
    })
  
    const removeColor = $((e:any) => {
      let col = e.target.getAttribute('data-color')
      const index = store.palette.indexOf(col)
      // only splice array when item is found
      if (index > -1) store.palette.splice(index, 1) // 2nd parameter means remove one item only
    })
    const addColor = $((e:any) => {
      let col = e.target.value
  
      store.palette.push(col)
      // only splice array when item is found
    })
    const handleUpload = $((e:any) => {
      if (e.target.files.length > 0) {
        const imageElement = document.getElementById('sample') as HTMLImageElement
        if (imageElement)
          imageElement.src = URL.createObjectURL(e.target.files[0])
      }
      e.target.value = null
      console.log(e.target)
    })
    const handleRadio = $(() => {
      const checkedInput = document.querySelector(
        'input[name="rmode"]:checked'
      ) as HTMLInputElement
      if (checkedInput) rmode.value = parseInt(checkedInput.value)
    })
  
    useVisibleTask$(() => {
      const manipulator = new Manipulator('sample', store)
      const startButtom = document.getElementById('start-btn')
    	// @ts-ignore
      startButtom.addEventListener('click', () => {
        console.log('starting')
        manipulator.init()
        manipulator.animate()
      })
    })
  
    
  
    return (
      <>
        <div>
          <h2>Palette</h2>
          <ul >
            {store.palette.map((col) => (
              <li
                class="colordiv"
                data-color={col}
                onClick$={removeColor}
                style={`background-color:${col}`}
              >
                {col}
              </li>
            ))}
  
            <label for="colorinput" id="colorlabel">
              <input
                class="none"
                id="colorinput"
                type="color"
                onChange$={addColor}
              />
            </label>
          </ul>
        </div>
        <div>
          <h2>Controls</h2>
          <div>
            {modes.map((m) => (
              <>
                <input
                  type="radio"
                  id={m.id}
                  name="rmode"
                  value={m.val}
                  onChange$={handleRadio}
                />
                <label for={m.id}>{m.text}</label>
                <br />
              </>
            ))}
          </div>
          <input
            class="none"
            type="file"
            id="img"
            accept="image/*"
            onChange$={handleUpload}
          />
          <button id="input-btn">
            <label for="img">Select a image</label>
          </button>
  
          <button class={!loaded.value && 'none'} id="start-btn">
            Start
          </button>
        </div>
        <div>
          <h2>image</h2>
  
          <img id="sample" src="/samples/sample.jpg" />
  
          <h2 class={!finished.value && 'none'}>
            <a href="#" download="output.png" id="download-sample">
              Download
            </a>
          </h2>
        </div>
      </>
    )
  })
  
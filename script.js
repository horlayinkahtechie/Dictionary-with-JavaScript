const result = document.getElementById( 'result' );
const sound = document.getElementById( 'sound' );
const btn = document.getElementById( 'search-btn' );
const sample = document.querySelector( '.sample' );
const btnClear = document.querySelector( '.btn-clear' );
const btnClearSearchBox = document.querySelector( '.inp-word' );
const errorDisplay = document.querySelector( '.error' );
const soundRemove = document.querySelector( '.sound-remove' );

btn.addEventListener( 'click', function () {
    let inpWord = document.querySelector( '#inp-word' ).value;
    
    const fetchApi = async function (id) {
        try {
            const response = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`);
            const data = await response.json();
            
            console.log( response );
            result.innerHTML = `
            <div class="result" id="result">
            <div class="word">
                <h3 class="sample">${ inpWord }</h3>
                <button>
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${ data[ 0 ].meanings[ 0 ].partOfSpeech }</p>
                <p>${ data[ 0 ].phonetic }</p>
            </div>
            <p class="word-meaning">
            ${ data[ 0 ].meanings[ 0 ].definitions[ 0 ].definition }
            </p>
            <p class="word-example">
            ${ data[ 0 ].meanings[ 0 ].definitions[ 0 ].example }
            </p>
        </div>
            `;
        }catch ( err ) {
            sample.innerHTML = ` 
            <h3 class="sample">${inpWord}</h3>
            `;
            soundRemove.innerHTML = '';
            errorDisplay.innerHTML = err;
            errorDisplay.style.fontSize = '30px';
        }
    }  
fetchApi()
} );

btnClear.addEventListener('click', function () {
    btnClearSearchBox.value = "";
    result.innerHTML = `
    <div class="result" id="result">
    <div class="word">
    <h3 class="sample">Sample</h3>
        <button>
            <i class="fas fa-volume-up"></i>
        </button>
    </div>
    <div class="details">
        <p class="noun">noun</p>
        <p class="transcribe">/sapm/</p>
    </div>
    <p class="word-meaning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea consectetu.
    </p>
    <p class="word-example">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quibusdam.
    </p>
</div>
    `;

    // Rebind the click event handler for the "Search" button
    btn.addEventListener('click', function () {
        // Existing code for fetching and displaying results
        btn.addEventListener( 'click', function () {
            let inpWord = document.querySelector( '#inp-word' ).value;
            
            const fetchApi = async function (id) {
                try {
                    const response = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`);
                    const data = await response.json();
                    
                    result.innerHTML = `
                    <div class="result" id="result">
                    <div class="word">
                        <h3 class="sample">${ inpWord }</h3>
                        <button>
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                    <div class="details">
                        <p>${ data[ 0 ].meanings[ 0 ].partOfSpeech }</p>
                        <p>${ data[ 0 ].phonetic }</p>
                    </div>
                    <p class="word-meaning">
                    ${ data[ 0 ].meanings[ 0 ].definitions[ 0 ].definition }
                    </p>
                    <p class="word-example">
                    ${ data[ 0 ].meanings[ 0 ].definitions[ 0 ].example }
                    </p>
                </div>
                    `;                
                }catch ( err ) {
                    sample.innerHTML = ` 
                    <h3 class="sample">${inpWord}</h3>
                    `;
                    soundRemove.innerHTML = '';
                    errorDisplay.innerHTML = err;
                    errorDisplay.style.fontSize = '30px';
                }
            }  
            fetchApi();
        } );
    });
}); 
import './App.css';
 
function App(){

    //1
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

    const positive = array.filter((item) => {
        if (item > 0){
            return <div>{item}</div>
        }
    }
    )

    //2
    const messages = [
        {message: 'hello', error: true},  
        {message: 'javascript', error: false},  
        {message: 'expovisiov', error: true},  
        {message: 'react', error: true},  
        {message: 'angular', error: false}, 
        {message: 'es6', error: false}, 
      ];

      const messageFalse = messages.filter((item) => {
        if(item.error == false){
            return item
        }
      })

      console.log(messageFalse);

      //3
      const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

      const wordsStars = words.map((item) => {
        if(item.length < 5){
            return <div>*</div>
        }
      })

      //4
      const sendMessage = (message) => {
        /*
        * Тут какой-то большой код для отправки сообщения
        */
      };

      const half = (number) =>{
        return number / 2;
      }

      const showConsole = () =>{
        console.log('Экспо');
      }

      const concatWords = (first, second) =>{
        return first + second;
      }

      //5
      function justText(){
        'expo';
      }

      function logging(text){
        console.log(text);
      }

      function add(x, y){
        const z = 3;
        
        return z * x * y;
      }

      function onlyPositive(number){
        if(number < 0) {
          return false;
        } else {
          return true;  
      }
    }


    return(
        <div className="container">
            {positive}
            {wordsStars}
        </div>
    )
}

export default App;
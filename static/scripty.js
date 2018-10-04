jQuery.getJSON('https://raw.githubusercontent.com/xyhacker/workingdemo/master/myflaskapp/data_10k.json',
function(data) {
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          };
        let number = getRandomArbitrary(0, 10000);
        console.log(number)
        number = number.toString();
        person = data[number];
        let jElement = document.querySelector('.show_me_the_json');
        let textNode = document.createTextNode(person['names']);
        jElement.appendChild(textNode);
        document.getElementById("review").value = person['review'];
});
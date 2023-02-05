async function getHardCodedString(){
    console.log("index.js gethard")
    const response=await fetch('http://127.0.0.1:9098/pah-zevel/us-central1/helloWorld',
        {
            credentials:'same-origin'
        });
    const data= await response.json();
    console.log(data)
    document.getElementById("response").innerHTML = await  data;
}

async function getQuaiWorkers () {
    console.log("index.js getworkers")
    const response=await fetch('http://127.0.0.1:9098/pah-zevel/us-central1/getQuaiWorkers',
        {
            credentials:'same-origin'
        });
    const data= await response.json();
    console.log(data)
}

async function setQuaiWorkers () {
    console.log("index.js setquai")
    console.log("in front");
    document.getElementById("my-form").style.display = "block";
    const response=await fetch('http://127.0.0.1:9098/pah-zevel/us-central1/setQuaiWorkers',
        {
            credentials:'same-origin'
        });
    const data= await response.json();
    console.log(data);
}
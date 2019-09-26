const format = (timeStamp)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let day  = new Date(timeStamp);
  return `${day.toLocaleDateString('en-US', options)}, ${day.toLocaleTimeString()}`  

}

export default format
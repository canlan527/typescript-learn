import axios from "../axios";

document.cookie = "age=18";

axios.get("/api/more/withcredential/get").then((res) => {
  console.log(res);
});

// axios.get("http://codercba.com:1888/airbnb/api/home/goodprice")
axios.post('http://127.0.0.1:3030/api/more/server2', {}, {
  withCredentials: true
}).then(res => {
  console.log(res)
})
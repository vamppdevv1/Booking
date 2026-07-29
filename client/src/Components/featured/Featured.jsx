import "./featured.css";
import useFetch from "../../hooks/useFetch"
export const Featured = () => {
  const {data,loading} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=dublin,reno,austin")
  return (
    <div className="featured">
      {loading ? "Loading please wait" : 
        <>
          {" "}
          <div className="featuredItem">
            <img
              src="https://imgs.search.brave.com/uCuRyTnJmYxvPmxvSk0A-8AwdGLo9s-uNeAtgw16gi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jdXN0/b20taG91c2UtZHVi/bGluLWlyZWxhbmQt/c3VtbWVyLW5pZ2h0/LWN1c3RvbS1ob3Vz/ZS1kdWJsaW4taXJl/bGFuZC0xMTk3NTg1/NDAuanBn"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://imgs.search.brave.com/uCuRyTnJmYxvPmxvSk0A-8AwdGLo9s-uNeAtgw16gi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jdXN0/b20taG91c2UtZHVi/bGluLWlyZWxhbmQt/c3VtbWVyLW5pZ2h0/LWN1c3RvbS1ob3Vz/ZS1kdWJsaW4taXJl/bGFuZC0xMTk3NTg1/NDAuanBn"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Reno</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://imgs.search.brave.com/uCuRyTnJmYxvPmxvSk0A-8AwdGLo9s-uNeAtgw16gi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jdXN0/b20taG91c2UtZHVi/bGluLWlyZWxhbmQt/c3VtbWVyLW5pZ2h0/LWN1c3RvbS1ob3Vz/ZS1kdWJsaW4taXJl/bGFuZC0xMTk3NTg1/NDAuanBn"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Austin</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      }
    </div>
  );
};

import { useState } from "react"
import "./index.css"
export default function App() {

  const names = [{name:"goms",pic:"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"}
  ,{name:"naren",pic:"https://image.shutterstock.com/image-vector/female-silhoutte-avatar-default-profile-260nw-1219366543.jpg"}
  ,{name:"nalan",pic:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhgWFhUYFRUSFRgYEhwSGBISGBURGBUZGRgUGBgcIy4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0MTQ0NDY0NDQ2NDQ0NDQ0NDQ0NDQ0NTQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NTQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EAD0QAAIBAgMGAwYEAwcFAAAAAAABAgMRBCExBRJBUWFxBiKBEzKRobHBQlJy0SPh8BRic4KSstIWM0NTY//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAQIEAwYGAwEAAAAAAAAAAQIDEQQSITFBUZEFYYGhsdEiMkLB4fAUI3ET/9oADAMBAAIRAxEAPwD6sAAdIAAAAAAAJIUm+iAbsYHsYN6Isxopde5KDN1ORWjQfFmaoImAKZ2R+yXI93FyRmARdmG4uS+B57JciQAXZC6ETCWHfB/EsgE52UZQa1R4XyOVJPp2BdVOZTBLOi11RGDRNPY8B6eAAAAAAAAAAAAAAyjFvQ9pwcuxahFJZApKVjCnRS1zZMADJu4AAIAAAAAAAAAAAAAAABFUpJ9GSgEp2KMotamJelFPUq1KbXYGsZ3IwAC4AAAAAAM6cN59OIjG7sW4xsrApOVglbJGQNTtzaPsKd178/LBdfzen3QehSnCVSahHdmG1tuQo+WK36nJPJfqf2NVHxNWTvKlBx5Run8bv6GswmDnUbcU5N5yeWr5tntajKDtKLi+pS73Pap4XDx+BpSfG716X0R1Wz9uUa3lvuS/LOyu+j0Ztj5zOmnqbHZ+3KtDyz/iQ6u8oro/swpczCt2cnrSfg/s/fqdqDUf9QYfcUt/Xh+JPk0ijW8VR/BSlLrO0fpctdHFHB15aKD8dPU6UHHT8S4h6QprvvP7kb2/iucF/lIzGy7OrPdrqdqDio7fxS/I+8f2J4eJq34qUH+neX7jMg+zq3Bp+PvY64HPUfFFJ5SjOD9JL9/kebS8UUacV7NOrJrJJNRXdv6InMjL+FiM2XI/t128ze1akYRcpSUYrNuTSSXVs5vHeLoRvGjB1GuLvGPdcX8jncZia2IlerLJe7GOUY+nPrqYRikrJWXQq5M9Oh2bThrV+J8lsvHd+SNzT8XVlnOjFx47m9FperZ1Gz9oU68N+DutGnk4vlJcGcAZbPxrwtVTjnCTSqRX5f34r+ZClYviMBSqx/rWWXC2z7vyfSjFowpVVOKlF3UknFrimrpkpofPlOrTs+nAjL0o3RTnCzsDaEr6GIABcHp4S0IXfRAN2VyalCy6slABzt3BxW05vE4tpe5S8q5Kz80vjf5HVbRxPsqM58Yxdv1aL52NDsLB7sVJ+9PzO/Lgir1O/B2pwnVf+Lx38vU3Wz8NGEUkrJa9+pljcDGpGzV+XNPmmWKOnqSl3ocOaWbPfXe5wuPwUqUrPNP3Xwa/crHc4vCxqRakrp/XmuTOT2hs6VJ848JfZ8mUlHkexhcWqnwy+b1/Pd0NZOinmsmKc5XtJdmTAod+bSzAABAAAAaIpUIvp2JQCU2tipKEo9UexkmWiKpRTzWTBZSvuRmM4ppp6MXadmZAudL4NxjdOVGT81J3j/hvT4O/xR058+2HifZYqm+FX+HL/M/L87H0EvF8Dwe0qWWtnX1a+PHz18QR1YXXVaEgLHAnYoHhNXhZ35/UhBundXPS3SjZfUrUo3ki6ClR8AAAZGl8QeZU6X/sqXl/hxV383Emw8bLv/SIMW97EP8AuQjH1lJyl8lEuIhLU7ZO1KMFyv4vX0t0LNF8CYhpJa8UTFnucQK9eCazWut9GupYNJt/GbkN1e9PJdI8X9gtNS9Om6klCPH9uczWtvPd93ee7+m+XyMQDE+lAAAAAAAAAAAAMZwUlmVs4uz9C2YVIby+gLRlbRlTENpXWTi1JPk08mfScJWVSnCfCcIyXqrnzaecZJ6pM7TwjW38JFcabcH6O6+TRaO5xdqU70VLk/Jr3RvQAXPCMKkbqxTL5TrxtLvmDSm+BnhlqyyRUF5e5KCsndgAwnKybei17AqabDyvVqP/AOkku0FGH2ZdRqti1N6Ck9Zucn3c7m0IWx3YiNpuPLTpoWaOpOUYSsS1cTGKu2lwvJ2V+Rd6nE4tOxnXqqKd3ayu+i5nE47EupNyfH3ekVoi7tzaHtHuRd4rVrSUv2RqzOT4I9jBYfJHPLd+S/IBnTp3JVFLgVO1ysVwWXFcjCVLkApohB6zwgsAAAAAAAAAVsTDj6M3/gOt/DqQ/LNS/wBSs/8AZ8zUSjdW5lvwhPdxMo8J03/rjJNfJyJW5TE/HhZx7k+jX2udyADQ+aBXxKyTLBHWV4sExdmj2nouxmcivE1W2dKPpvImj4qlxo/CT/4lcyO19n4jkuq9zqCrtCVqNR8qc38Is09PxVT/ABU5rtuv9iWrtzD1Kc479t6ElaScb3i8r6C6ZmsJXhJOUHa5rvDlXy7r/C8uzv8Ae5vZTS1ZxuArygk11vfRq5aqbQnLio/p/cJ2R6WIwrnVbT0NxjdpRhlx5LX15GkxWLnUd29NFwRCzwhs1pUIU9VvzBnGm/QzpQ4/AlINHIHh6AUAAAIa0eJET1tCAGkdgACCwAAAAAALOwcsZDrvW9Yy/YrEuznbE0X/AH0vi7fcFZq8JLnF+jO+ABqfMgxehkAD54geR0PTI+oBHUgrPJaMkDQCdiKh7q/riSkOGfl7MmBaXzMBLMHqYKloHidz0kxABovF+JxNPCyeGjJ1HKK8i3pQg9ZRjxei9b8AVlLLFs3NStGLSlKMW9FKSTfZPUkPj2y/BOMxVRSr71OLac51Zb05Ljuxd233sj677sUlwSSvnouLJaM6NSdS7cbcjGs+BEJczTbB2+sY5qNKpTVNrOpFJSu3kuuWhB1XUbR4s3IBy3i/w1Vxkqc6dZQdKLUYy3lHebvvqUc09FpwBFSUoxvFXfLY6kGm8M4TE0aLhiaiqSUnuNSc2oWVk5NJvO5uQTGWZJtW7gAT4fD72byX1IJbSV2QEmCi/wC0Ucn/ANyP+5GwjSjHREuBhvYimvy3k/S/7Imxi62jduD9DqgAaHzwAPGAfO6byMiOkyQyPqXuAACCCnlOS55onIK6s1Llr2J0wWlrZgAAqZQnbsTxkmVgSVcblsFTefMXYIylmUkiCc7sxAJUbHMbV8L1ataU4YytSjUt7SMXJrRK0bSVll1IafgmClFyxVeUItS3XKyck76/0zrQLmbw9Nu7Xr7gAEGwAAAjG7S5m2hGySXAoYSN5dszYFkc9Z62Bb8P071ak+EVuru3/L5lCtO0W/h3Og2PhvZ0op6y80u7t9rEo5MRPJSffp7mwABY8oGFR2i+xmQ4h5dwTHc4D2Ek9L9szNqxbLEbSWeZSx9FKq1ujVg2MsPF8PhkRvBrg2vmRYKtEoyjdW5kNGVvK9Vp2L8sJJaWfyKmIovW1pLTqQawnGWlzMGFKe8uvEzA2AAAAAAAAAAAAAAAB7GLbss2WKWEbzll04lunSUdESZSqpbGOHpbi6vUlBFK8pKEc3LLsiTn1k9SfZ2H9tVX5Keb6vgv65HVFXA4SNKCiu8nzlxZaLJHl4ir/wBJabLb97wACTAFWu7vsWJOyKTdwaU1rc5cloyztzIgUPcauWwY05XRkDEHkknrmegA12LwP4oa8Vz7FWnUT6Nao3ZUxWCU815Zc1x7kWOinW+mfUpgilKUHuzVnz5kqdyDdpoAAEAAAAAAAtYGF25ctO5VLuBeTXX7fyJRnV+UtAwnNR1ZlhsLUrvyrdjxk/tz9CTm0SzN2XMj3pSkowW9J8uB0GzNnKjHPzTfvS+y6EuBwMKMbRWb95u13/LoXCyR59fE51kht6/vIAAk5AAYylZXAIcRPh8Sueyd8zwHRFWRzAAKHsmVOdmWUyoSU6luwKSjcnAAMwAACvjKKnHTNfTkal0bZxdjfGqrRtJrkyGdNCbSaK3tJLWN+qMlXi+Nu5KYygnqkQb3XFBTT4oyInQjyMKlFJXzyASi+JYMXOK4o6LBeHKE6cJPfvKEZNbytdxT5F2nsHDL/wAd/wBTk/qy2VnFLHUItrV+C9zjPbK9leTeiXE2mztmYibvu7ia1n5flr8jrqOHhD3YRj+mKj9CcnKctXtG6tCHi9fJWRp8JsSEc5XnLr7vw4+pt0egtY8+dSdR3k7gAAoAAACnWnd9EZ1ql8l6kANYR4sAAGhzAAKHsAAAElOpbXQnTKhlGbQKONyyDGE0zIGYNXXd5PuX69Tdjfjw7mtIZvRW7AAINwQVJpp9HYnK9Gm5uMVrOol8Wl9wXha93wPoWAjalTXKnBfCKLJ5Y9NT5WTzNsAAEAAAAAwnJLUAzK9atwXqYVKrfREQNYw4s9PAAaAAAHJxxEXx+JJFp6Z9jWCMmtMjO57zpLgbQFKGKktc/kyaOJi+ncm5m4SRODD2sfzL4nkq0VxXpmCLPkSJkn9pUV5ijPFcl8StKbbu3ci5ZUr/ADFqrW33fhw6GBAj1TYNclloTAwU0ZKSIFjGo7J9mWPDUFLFQv8Ah3mu6TzKtd+Vl/wtC2JX6JP5ElaulCb7n6HcgA0PmADByS4oxdZdwTZkp42VpV3wI5Sb1BZU3xJp1+RDKTepiAaqKQAAJAAAAAAP/9k="}]
  
  
    return (
      <div className="App">
        <Color/>
      <Counter/>
      </div>
    );
  }

  function Color(){
const [color,setColor] = useState("blue")

 const styles = {backgroundColor:color, fontSize:"1rem"}

    return(
      <div>
        <input value={color} style={styles} onChange={(event)=> setColor(event.target.value)} placeholder="Enter a Color" />
      </div>
    )
  }



  function Counter()
  {
    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)
    return(
      <div>
        <button onClick={()=>setLike(like+1)}>👍{like}</button>
        {/* <p>{like}</p> */}
        <button onClick={()=>setDisLike(dislike+1)}>👎{dislike}</button>
        {/* <p>{dislike}</p> */}
      </div>
    )
  }
  // function Msg({name,img}){
  //  return(
  //     <div>
  //     <img src={img} height="100" alt={name}/>
  //     <h1>Hey, {name}!!!</h1>
  //     </div>
  //   )
  // } 
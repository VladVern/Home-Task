import { useState } from "react"

function Form() {
  // huk
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  // obrabotchik
  const passwordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const emailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const nameCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  //proverka i error
  const buttonCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!name) {
      console.log("not gude :-(")
      setMessage("write name")
      startTimer()
      return
    }
    if (!email.includes("@")) {
      console.log("not gude :-(")
      setMessage("wrate emala")
      startTimer()
      return
    }
    if (password.length < 8) {
      console.log("not gude :-(")
      setMessage("wrate pasward min 8")
      startTimer()
      return
    }
    console.log("gude :-)")
    setMessage("ALL GUDE")
    startTimer()
  }

  //timer texta
  const startTimer = () => {
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  //vivod
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={buttonCheck}>
        <div>
          <input type="name" placeholder="Name" onChange={nameCheck} value={name} />
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={emailCheck} value={email} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={passwordCheck} value={password} />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
        <p>{message}</p>
      </form>
    </div>
  )
}

export default Form

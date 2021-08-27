function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/gaojxcs"
  const githubUrl = "https://github.com/anarkia7115"
  return(
    <div className="text-center">
      <h1 className="">Sean Gao</h1>
      <p className="">高佳翔</p>
      <p>gaojxcs@gmail.com</p>
      <p>
        <a href={linkedInUrl}>LinkedIn</a>{' '}&bull;{' '}
        <a href={githubUrl}>GitHub</a>
      </p>

    </div>
  )
}
export default Contact
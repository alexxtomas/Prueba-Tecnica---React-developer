const Link = ({ href, children, ...props }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer' {...props}>{children}</a>
  )
}

export default Link

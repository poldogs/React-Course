import PropTypes from 'prop-types'


export const FirstApp = ({ title , subTitle, name }) => {

    const newMessage = {
        name: 'Leopoldo',
        age: 45
    }

  return (
    <>  {/* React.Fragment */}
        <h1>{ title }</h1>
        {<code>{JSON.stringify(newMessage)}</code>}
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'React Default',
    subTitle: 'Subtitulo por defecto',
    title: 'Titulo por defecto'
}

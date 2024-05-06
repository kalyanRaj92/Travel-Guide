const PackageItem = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails
  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )
}
export default PackageItem

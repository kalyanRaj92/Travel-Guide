import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import PackageItem from '../PackageItem'

class TravelGuide extends Component {
  state = {isLoading: true, packages: []}

  componentDidMount() {
    this.getPackagesData()
  }

  getPackagesData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)

    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({packages: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, packages} = this.state
    return (
      <div>
        <h1>Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {packages.map(each => (
              <PackageItem packageDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default TravelGuide

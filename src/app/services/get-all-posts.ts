import axios from 'axios'

export const getAllPosts = async () => {
  try {
    const rest = await axios.get(
      'https://api-sandbox.kmdevantagens.com.br/kmv/api/v1/posto?geolocalizacao=lat:-20.9074473%7Clng:-49.2661772%7Cdistancia:3&servico=PLANO_MKT:S&client_id=6ac535bf2cd146b7bd53cb23dd7222fd&client_secret=1C9aAbbf075B497085CDa6616008dD35',
    )

    console.log(rest)
    console.log(rest)
  } catch (error) {
    console.log(error)
  }
}

import React from 'react'
import pfp from "./pfp.jpg"
import './Pfp.css'

const Pfp = () => {
  const profilePicURL = "https://edobbico-2-buc.s3.us-east-1.amazonaws.com/ethan-headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATYYPLZJFOPLVYSOJ%2F20250904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250904T034917Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDcExoVabvuOp92bAS12o9rVRZ0%2FWxtB7Db%2Fmgy%2Bz%2B3bwIhAP39CtBwHoUzVaEhecja21P9%2FFr7Lpd481YUO2WMkbwHKuACCFUQAhoMMjU5MzQwODgwNDU4IgwgdZ8WviJCHIYK3PQqvQJiwgfIASyMxAG93HbWkREs3MDvFkwR3nS7BHTmgtKSp%2FPLFYNzmzxvZo1XK2ItrNy1AmepmClvOGCa5rDjT1ENqu1KLqU84uIySEyNblrhFGtaX7QWwMETLkhMM0gj7fRJfNwnCfTSsNxxsfgbkFmsrIlSQveJd9j2kqKqDNZHE4ElnD2lTUsykTUU8EXG8lhl22rZfY90T9euGHJSvG%2Fhh4vn%2ByxDq7l95mYmGTRa6QNgFMKGg03TqLDA%2Fh8YxElIU%2BtkkAPORgl%2Bg%2B6UJY6llfZ1gzjIIzwviE%2Bv7I9r7%2FOMHYAWLHuOyZtFxlkMl05Ii6PQ%2B7Sr9yfb9yz%2BRFwNjbNOBXkQc0ze0OF9SWTZkOZZiMzhHyg4KQkvcVcQnaG8CN0GSIl0opnkcqjVvZlRIpbweauGfrqe6duinjDomOPFBjqsAuOAU%2FDXIQL6sXEk8qq5Vse3gMHQij9bvUB6ldtZcX4dGlazcZLeI8fRCM8N8hwm65yLNki85ln2ob9ELX0DKM1E3phXx7P1HK9UHn14Ntwm5Y%2BgmiFtIHQCv2yM1zaQde1wSSmaWl1%2BomWs5Qtib7w2e24sIAAfNG%2B5WlOFVHlKY5i%2BA1Rz%2BHVcB3I%2B4DO8T6jg1OC1SMxVQaJkdNVm0MbLKF7G1gy34ce0D5843x6TFROvmDwEPpYj0qyjhgQtxcksEuLPmDzFSK2xN2xPw58qAWQTKaLlW1nhzYcSJ3bKhQ3OvsSjsjYvpydqQGQccheJw5F%2B6K0dfrsEyKotAH0Ab1nfUaPhtqZ8bs67GsJpLi1YNDJmQen%2BZpNoPw9Y0Ch7jP9vgAsAlm6efQ%3D%3D&X-Amz-Signature=bc0473b3f158993ae2494ef0ff6cbae8856f8c08bd4964500a17c1a55e3f840b"
  return (
    <div className='imga'>
        {/* <img src={pfp} alt='Ethan' width="auto" height="300" className='pfp'/> */}
        <img src={profilePicURL} alt="Ethan Headshot" width="auto" height="300" className='pfp'/>
    </div>
  )
}
export default Pfp;
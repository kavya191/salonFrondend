import BASE_URL from '../Services/baseURL'

import { commonStructure } from '../Services/CommonStructure'

 export const userEnquiryApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/enquiry/user-enquiry`,body)
}
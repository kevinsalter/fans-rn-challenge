/**
 * 🚨 Model of the data returned of a single employee
 */
export type EmployeeModel = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    address: {
        id: number;
        street: string;
        streetName: string;
        buildingNumber: string;
        city: string;
        zipcode: string;
        country: string;
        county_code: string;
        latitude: number;
        longitude: number;
    };
    website: string;
    image: string;
};

/**
 * 🚨 Model of API response after calling `await response.json() if using fetch`
 */
export type ResponseJson = {
    status: string;
    code: number;
    total: number;
    data: EmployeeModel[];
};

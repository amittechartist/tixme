export const app_url = '/';
export const admin_url = app_url+'admin/';
export const organizer_url = app_url+'organizer/';
export const customer_url = app_url+'customer/';

export const apiurl = 'http://localhost:5001/api/v1/';
export function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

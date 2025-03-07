
export default props => {
    if (props.num != '') {
        let fat = 1;
        for (let i = 2; i <= props.num; i++) {
            fat *= i
        }
        return (fat);
    } else {
        return '';
    }
}
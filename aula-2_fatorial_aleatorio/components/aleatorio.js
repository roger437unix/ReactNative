export default props => {
    const num = Math.random() * (props.max - props.min) + props.min;
    return num;
}

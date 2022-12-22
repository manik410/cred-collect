import { connect } from 'react-redux';
import { axiosTokenIntialize } from './index';

function AxiosWrapper(props) {
    axiosTokenIntialize(props?.token)
    return props?.children
}
const mapStateToProps = (state) => ({
    token: state.confState.token
})
export default connect(mapStateToProps)(AxiosWrapper)
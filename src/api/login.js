/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2018/6/11
 * 历史修订：
 */
import{http} from '@/utils';
/**
 * 用户登陆
 */
export const login = data => http.post('/user/login',data);
/**
 * 用户登陆by token
 */
export const getUserInfo = () => http.get('/user/login/token');
/**
 * 用户退出
 */
export const logout = () => http.get('/user/logout');

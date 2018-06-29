/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2018/6/11
 * 历史修订：
 */
import{http} from '@/utils';
/**
 * 获取用户列表
 */
export const getUsers = () => http.get('/user/get');
/**
 * 获取单个用户
 * @param userId
 */
export const getUserById = userId => http.get("/user/getUserById?uid=" + userId);
/**
 * 添加新用户
 * @param params
 */
export  const addUser=(params)=>http.post("/user/add",params);



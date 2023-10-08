import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open lg:w-80 z-50">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex justify-end pr-[5%] md:pr-[10%]">
                <label htmlFor="my-drawer-2"  tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><NavLink to={`/Products/iphone`}>Iphone</NavLink></li>
                <li><NavLink to={`/Products/samsung`}>Samsung</NavLink></li>
                <li><NavLink to={`/Products/oppo`}>Oppo</NavLink></li>
                <li><NavLink to={`/Products/huawei`}>Huawei</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Sidebar;
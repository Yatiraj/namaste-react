import Logo from '../assets/img/foodX.png'
const Footer = () => {
    return (
        <div className="bg-gray-200 h-20 border-t-2 shadow-md flex justify-between px-20 items-center mt-10">
            <img className="w-30 h-10" alt="logo" src= {Logo}/>
            <h2>No Copyrights</h2>
        </div>
    );
};

export default Footer;
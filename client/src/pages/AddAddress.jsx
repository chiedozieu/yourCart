import React, { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";

// input fields component

const InputField = ({type, placeholder, name, handleChange, address}) => (
<input 
type={type} 
placeholder={placeholder} 
name={name} 
onChange={handleChange} 
value={address[name]}
required
className="border border-gray-500/30 rounded w-full p-2 py-2.5 mt-1 outline-none text-gray-500 focus:border-primary transition-all duration-300 ease-in"
/>
);
const AddAddress = () => {
    const [ address, setAddress ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
      };

    const onSubmitHandler = async(e) => {
        e.preventDefault();
    };
    
    
  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="text-primary font-semibold">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
      <div className="flex-1 max-w-md">
      <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 test-sm">
      {/* first name and last name */}
      <div className="grid grid-cols-2 gap-4">
        <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name"/>
        <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name"/>
      </div>
       <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Email Address"/>
       <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street"/>
       {/* city and country */}
       <div className="grid grid-cols-2 gap-4">
         <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City"/>
         <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State"/>
        </div>
         
         {/* state and zip code */}

        <div className="grid grid-cols-2 gap-4">
         <InputField handleChange={handleChange} address={address} name="zipcode" type="number" placeholder="ZIp Code"/>
         <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country"/>
       </div>
        <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="Phone Number"/>

        <button className="w-full mt-6 bg-primary text-white py-2.5 rounded cursor-pointer uppercase hover:bg-primary/90 transition-all">
            Save Address
        </button>
      
      </form>

      </div>
      <img src={assets.add_address_iamge} alt="add address" className="md:mr-16 mb:16 md:mt-0" />
      </div>
    </div>
  );
};

export default AddAddress;

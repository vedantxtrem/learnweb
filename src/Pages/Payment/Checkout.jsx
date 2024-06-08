import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../../Redux/Slice/RazorpaySlice.js'
import toast from 'react-hot-toast';
import HomeLayout from '../../Layouts/HomeLayout';
import { BiRupee } from 'react-icons/bi';



function Checkout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);

  console.log(razorpayKey,subscription_id);

  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: ""
  }

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      toast.error("Something went wrong");
      return;
    }
    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "LMS Pvt.Ltd.",
      description: "Subscription",
      theme: {
        color: '#F37254'
      },

      handler: async function (response) {

        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;

        toast.success("Payment successfull");

        const res = await dispatch(verifyUserPayment(paymentDetails));

        console.log(res);
        res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function load() {
    await dispatch(getRazorPayId());
    await dispatch(purchaseCourseBundle());
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <HomeLayout>
       <form 
        onSubmit={handleSubscription}
        className='min-h-[90vh]  flex items-center justify-center text-white '
      >   
        <div className='w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_gray] rounded-lg relative'>
          <h1 className='bg-yellow-500 w-full p-2 text-center absolute top-0 text-2xl rounded-t-lg '>Subscription Bunddle</h1>
          <div className="px-4 space-y-5 text-center pt-4">
            <p className="text-[17px]">
              This purchase will allow you to access all available courses of our Platform for {" "}
            </p>
            <span className='text-yellow-500 font-bold'>
              <br />
              1 Month Duration {"  "}
            </span>
            All the Existing and new launched courses will be also available
            <p className='flex items-center text-center justify-center text-yellow-500 font-bold text-4xl'>
              <BiRupee/> <span className='pr-2'> 5 </span> only
            </p>
            <div>
              <p className='text-xl'>100% refundale on cancellation </p>
              <p className=' text-blue-400  pt-2'>* Terms & Condition's applied *</p>
            </div>
            <button type="submit" className='px-4  bg-yellow-500 hover:bg-yellow-700 transition-all ease-in-out duration-300 rounded-md py-2 font-semibold text-lg cursor-pointer'>
              Buy Now
            </button>
          </div>

        </div>

      </form>
    </HomeLayout>
  );
}

export default Checkout;
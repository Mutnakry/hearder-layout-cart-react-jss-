import React from 'react';

function Footer() {
    return (
<footer className="bg-fuchsia-700 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600 p-4">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Left Section */}
                <div className="mb-4 lg:mb-0">
                    <div className="mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsqEmAbfy5jsel8SB-RnLMKON3d0N--xc8Q&s" alt="Company Logo" className="h-8" />
                        <p className="text-sm mt-2 text-white">We are Shoping</p>
                    </div>
                    <p className="text-sm mb-4 text-white">
                        <span className="block mt-2">ការិយាល័យកណ្តាល: អាគារអ៊េអន សែនស៊ូរប៉ាក</span>
                        <span className="block mt-2">និងការិយាល័យ សាខាបឹងកេងកងតាំងពិភពលោក</span>
                    </p>
                    <p className="text-sm text-white">&copy; Copyright 2024 Shoping CAMBODIA. All rights reserved.</p>
                </div>

                {/* Center Section 1 */}
                <div className="flex flex-col items-center mb-4 lg:mb-0">
                    <p className="mb-4 text-white">ទាញយកកម្មវិធី</p>
                    <div className="flex space-x-4">
                        <a href="#"><img src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png" alt="App Store" className="h-8" /></a>
                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYb11SWILM9GUMlL2AP737PtZKXbt_8_ASQ&s" alt="Google Play" className="h-8" /></a>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><img src="https://banner2.cleanpng.com/20240130/exl/transparent-social-media-logo-twitter-logo-blue-bird-on-white-1710892229266.webp" alt="Visa" className="h-6" /></a>
                        <a href="#"><img src="https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png" alt="MasterCard" className="h-6" /></a>
                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPKE6Q6FDO_wcxBWE2ZEoOel4VuTiWDMWzg&s" alt="UnionPay" className="h-6" /></a>
                        <a href="#"><img src="https://e7.pngegg.com/pngimages/665/469/png-clipart-logo-computer-icons-instagram-logo-miscellaneous-company.png" alt="JCB" className="h-6" /></a>
                    </div>
                </div>

                {/* Center Section 2 */}
                <div className="flex flex-col mb-4 lg:mb-0">
                    <p className="mb-4 text-white">ទំនាក់ទំនង</p>
                    <ul className="text-white">
                        <li className="mb-2">Shoping1-096 892 0 289</li>
                        <li className="mb-2">Shoping2-096 892 1 289</li>
                        <li className="mb-2">Shoping3-096 892 7 289</li>
                        <li>សម្រាប់ព័ត៌មានអតិថិជន</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex flex-col">
                    <p className="mb-4 text-white">អំពីយើង</p>
                    <ul className="text-white">
                        <li className="mb-2">ការងារជាមួយអ៊ីអន</li>
                        <li className="mb-2">គោលការណ៍ការងារ</li>
                        <li className="mb-2">ឧស្សាហកម្ម និងបច្ចេកវិទ្យា</li>
                        <li>គោលការណ៍ឥតគិតថ្លៃសេវា</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';

const Home = () => {
    return (
        <div className="bg-white text-center mb-20 mt-10">
            {/* Hero Section */}
            <section className="bg-blue-500 rounded-lg text-white py-16 px-6 container mx-auto  flex justify-between items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-4xl font-bold mb-4">
                            Book Appointment With Trusted Doctors
                        </h1>
                        <p className="mb-6">
                            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                        </p>
                        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">
                            Book appointment
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Doctor"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Speciality Section */}
            <section className="bg-white py-12">
                <h2 className="text-2xl font-bold mb-6">Find by Speciality</h2>
                <p className="mb-8">
                    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                </p>
                <div className="flex justify-center space-x-6">
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-200 p-4 rounded-full mb-2">
                            <img src="https://via.placeholder.com/50" alt="General Physician" />
                        </div>
                        <p>General Physician</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-200 p-4 rounded-full mb-2">
                            <img src="https://via.placeholder.com/50" alt="Gynecologist" />
                        </div>
                        <p>Gynecologist</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-200 p-4 rounded-full mb-2">
                            <img src="https://via.placeholder.com/50" alt="Dermatologist" />
                        </div>
                        <p>Dermatologist</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-200 p-4 rounded-full mb-2">
                            <img src="https://via.placeholder.com/50" alt="Pediatricians" />
                        </div>
                        <p>Pediatricians</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-200 p-4 rounded-full mb-2">
                            <img src="https://via.placeholder.com/50" alt="Neurologist" />
                        </div>
                        <p>Neurologist</p>
                    </div>
                </div>
            </section>

            {/* Top Doctors Section */}
            <section className="bg-white py-12">
                <h2 className="text-2xl font-bold mb-6">Top Doctors to Book</h2>
                <p className="mb-8">
                    Simply browse through our extensive list of trusted doctors.
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    More
                </button>
            </section>

            <section className="bg-blue-500 rounded-lg text-white py-5 px-6 container mx-auto  flex justify-between items-center">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-4xl font-bold mb-4">
                            Book Appointment

                            With 100+ Trusted Doctors
                        </h1>

                        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">
                            Create Account
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-2 lg:mt-0">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Doctor"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

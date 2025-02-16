import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {

    const session = await getServerSession(authOptions);
    console.log(session);


    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to Your Dashboard
                </h1>

                {session?.user && (
                    <div className="flex flex-col items-center">
                        <Image
                            src={session?.user?.image as string}
                            width={100}
                            height={100}
                            alt="User image"
                            className="rounded-full border-2 border-gray-300 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mt-3">
                            {session?.user?.name}
                        </h3>
                        <p className="text-gray-600">{session?.user?.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;

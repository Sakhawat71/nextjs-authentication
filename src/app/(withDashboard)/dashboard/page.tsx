import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {

    const session = await getServerSession(authOptions);
    console.log(session);


    return (
        <div>
            <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
            <h3>{session?.user?.name}</h3>
            <Image
                src={session?.user?.image as string}
                width={100}
                height={100}
                alt="user image"
            />
            <p>{session?.user?.email}</p>
        </div>
    );
};

export default DashboardPage;

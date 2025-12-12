'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import Navitems from "./Navitems";
import { signOut } from "@/lib/actions/auth.actions";

function UserDropdown({user}:{user:User}) {

    const router = useRouter();
    const handelSignOut = async () => {
        await signOut();
        router.push('/sign-in')
    }

    // const user = { name: "John Doe", email: "john@gmail.com" };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:gray-500 cursor-pointer">
                    <Avatar className="h-8 w-8">
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback className="bg-gray-700 text-gray-200 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                <div className="flex relative items-center gap-3 py-2">


                    <Avatar className="h-8 w-8">
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback className="bg-gray-700 text-gray-200 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <nav className="sm:hidden">
                    <Navitems/>
                </nav>
                <DropdownMenuSeparator className="hidden sm:block" />
                <DropdownMenuItem onClick={handelSignOut} className="cursor-pointer text-gray-100 text-md font-medium focus:bg-transparent hover:text-white">
                    <LogOut className="mr-2 h-4 w-4 hidden sm:block"/>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown

import { DiscordLogoIcon, FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation © Copyright: {data} 
                        </p>
                    <p className='text-lg'>  Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/aline-romanini/" target="_blank">
                        <LinkedinLogoIcon size={48} color="white" weight="bold" /></a>
                        <a href="https://discord.com/users/succubus7759" target="blank">
                        <DiscordLogoIcon size={48} color="white" weight="bold" /></a>
                        <a href="https://github.com/alineromanini" target="blank">
                        <GithubLogoIcon size={48} color="white" weight="bold" /></a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
export default function Page() {
    return(
        <>
            <div className="flex flex-col lg:flex-row h-full align-middle">

                <div className="w-full lg:w-1/3 p-2">

                    <div className="flex justify-center pb-4">
                        <img className="size-30" src="https://pbs.twimg.com/profile_images/1962260300331180032/LKsRHdYi_400x400.jpg" alt=""/>
                    </div>


                    <p className="pb-4 text-center">Welcome to Desherr’s page! Drop something in the chat and check out the other tabs: About Me, Art, Mods, Songs, Friends, Socials, and Credits.</p>

                    <div className="flex flex-row justify-center">

                        <img className="max-w-1/2" src="https://adriansblinkiecollection.neocities.org/stamps/e55.gif" alt=""/>

                        <img className="max-w-1/2" src="https://adriansblinkiecollection.neocities.org/stamps/e46.png" alt=""/>

                    </div>

                </div>

                <div className="w-full flex-1 lg:w-2/3 p-2">
                    <iframe className="rounded-lg"
                            src="https://www3.cbox.ws/box/?boxid=3548947&boxtag=0akyIy" width="100%" height="100%"
                            allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0"
                            scrolling="auto"></iframe>
                </div>
            </div>
        </>
    )
}
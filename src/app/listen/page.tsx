

export default async function Page(){

    const response = await fetch(`${process.env.LOCALHOST}/api/config`)
    const { url } = await response.json()

    return <div className="flex items-center justify-center w-screen h-screen">
        <audio src={url} autoPlay controls ></audio>
    </div>
}
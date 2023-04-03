import { useRouter } from "next/router"

const EventTsonkh = () => {
    const router = useRouter()
    const eventSongyo = (zam) => {
        router.push(zam)
    }

    return <section className="px-10 py-4 flex flex-wrap gap-3">
        <div className="w-1/5 h-[200px] flex justify-center items-center border rounded-[3px] cursor-pointer" onClick={() => {
            eventSongyo('event/event 1')
        }}>
            event 1
        </div>
    </section>
}

export default EventTsonkh
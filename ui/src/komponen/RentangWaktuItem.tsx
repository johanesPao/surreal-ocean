import { IconBrandGithub } from "@tabler/icons-react"

export const RentangWaktuItem = () => {
    return (
        <div className="relative pl-5">
            <div className="absolute top-2 left-2">
                <IconBrandGithub className="w-7 h-7 rounded-full bg-sky-300 ring-8 ring-sky-300 p-1" />
            </div>
            <div className="static border-l-4 border-slate-800 px-8 py-3 flex flex-col overflow-clip border-dotted">
                <text className="text-slate-600 text-m italic">Februari 22, 2023</text>
                <text className="font-bold text-xl italic">SMA Regina Pacis Bogor</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae posuere lacus, eget consectetur neque. Aliquam erat volutpat. Mauris vel orci vitae augue vehicula commodo. Nullam vel massa nec urna tristique sodales eget in ipsum. Aenean venenatis quis metus et fringilla. Aliquam congue vehicula ligula, eget volutpat urna aliquam eu. Phasellus orci urna, elementum eu luctus et, sollicitudin et risus. Etiam eget eros vel tortor vehicula fringilla sit amet eget mi. Ut commodo in sem et euismod. Donec non iaculis nulla. Maecenas sit amet sapien a eros ultricies dignissim at quis libero. Proin sagittis nisl sit amet enim varius sollicitudin. Sed est odio, scelerisque sed placerat et, pretium id nisi. Etiam molestie imperdiet convallis. In laoreet, nisi sit amet venenatis faucibus, risus dui aliquam ante, nec imperdiet purus elit et augue. Vivamus vitae libero sit amet arcu finibus tristique sit amet ut turpis.</text>
            </div>
        </div>
    )
}
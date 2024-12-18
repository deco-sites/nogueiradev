import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import SocialMedia from "site/components/SocialMedia.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Props {
    /**
    * @title Nome
    */
    name: string
    /**
    * @title Tecnologias trabalhadas
    */
    technologies: string
    /**
    * @title Foto
    */
    photo: ImageWidget
    /**
    * @title Ícone 
    * @format icon-select
    * @options deco-sites/storefront/loaders/availableIcons.ts
    */
    iconImg: AvailableIcons
}

export default function PersonalInfo({
    name = "Felipe Nogueira",
    technologies = "React + Typescript",
    photo
}: Readonly<Props>) {
    return (
        <>
            <div className="flex flex-col items-center w-[370px] bg-white rounded border-2 border-[#B7A261] p-4 items-center">
                <div className="w-48 h-48 overflow-hidden rounded border-2 border-[#B7A261]">
                    {photo && (
                        <Image
                            src={photo}
                            alt="Foto avatar"
                            height={300}
                            width={300}
                            class="object-cover w-full h-full"
                        />
                    )}
                </div>
                <div>
                    <h1 className="text-lg font-bold">
                        {name}
                    </h1>
                </div>
                <div className="rounded border border-[#B7A261] bg-[#FEF6DD]">
                    <h2 className="text-base p-2">
                        {technologies}
                    </h2>
                </div>
                <div className="flex gap-4 mt-8">
                    <SocialMedia icon={<Icon id="LinkedIn" height={20} width={20}/>} />
                    <SocialMedia icon={<Icon id="GitHub" height={20} width={20}/>} />
                    <SocialMedia icon={<Icon id="Instagram" height={20} width={20}/>} />
                    <SocialMedia icon={<Icon id="Discord" height={20} width={20}/>} />
                </div>
            </div>
        </>
    )
}
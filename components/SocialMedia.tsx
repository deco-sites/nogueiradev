export interface Props {
    icon: any
}

export default function SocialMedia({ icon }: Props) {
    return(
        <>
            <div className="w-10 h-10">
                <div className="border border-[#B7A261] justify-center align-center flex">
                    {icon}
                </div>
            </div>
        </>
    )
}
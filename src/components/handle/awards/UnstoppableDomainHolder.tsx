import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "../../ui/dialog";

export const UnstoppableDomainHolderAwardDialog = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-white rounded-lg p-1">
                        <img
                            src="/img/handle/ud.png"
                            className="w-[28px] h-[28px] rounded-md mx-auto"
                            alt=""
                        />
                    </button>
                </DialogTrigger>
                <DialogContent className="text-center w-full sm:max-w-sm lg:max-w-sm">
                    <DialogHeader className="xs:text-xl font-semibold sm:text-center">
                        Unstoppable Domains Holder
                    </DialogHeader>
                    <div className="bg-[#D0369C39] w-min mx-auto whitespace-nowrap text-[#BE0044] py-1 px-2 text-xs rounded-full font-semibold uppercase">
                        receive.me badge
                    </div>
                    <DialogDescription className="space-y-1 font-medium text-gray-600">
                        <p>
                            This badge confirms this account is a current
                            Unstoppable Domains Holder!
                        </p>
                        <p>
                            The user owns at least 1 domain from Unstoppable
                            Domains, with various TLDs
                        </p>
                    </DialogDescription>
                    <div className="mt-8">
                        <img
                            src="/img/handle/ud.png"
                            className="max-w-[200px] rounded-full mx-auto"
                            alt=""
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

type Props = {
    url: string;
    serviceName: string;
    description?: string;
    icon?: React.ReactNode;
};

export function Link({ url, serviceName, description, icon }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 justify-items-center items-center p-6 border border-gray-800 hover:bg-gray-700 rounded-xl"
        >
            {icon}
            <span className="text-sm font-medium">{serviceName}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
                {description}
            </span>
        </a>
    );
}
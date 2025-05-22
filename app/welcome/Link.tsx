type Props = {
    url: string;
    text: string;
    icon: React.ReactNode;
}

export function Link({ url, text, icon }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
            {icon}
            <span className="text-sm font-medium">{text}</span>
        </a>
    );
}
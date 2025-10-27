import Image from 'next/image';
import { BiLogoWhatsapp } from 'react-icons/bi';

interface ProductCardProps {
    name: string;
    imageUrl: string;
    price: string;
    description?: string;
    unitLabel?: string; // ex: "unidade 60g"
    availableForOrder?: boolean; // mostra badge "Disponível para encomenda"
    whatsappText?: string; // mensagem personalizada para abrir no WhatsApp
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, price, description, unitLabel, availableForOrder, whatsappText }) => {
    const defaultMessage = `Olá! Tenho interesse no produto ${name}${unitLabel ? ` (${unitLabel})` : ''}. Poderiam me passar mais detalhes?`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText || defaultMessage)}`;
    return (
        <div className="group relative overflow-hidden rounded-xl border border-brand-beige/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            {/* Badge */}
            {availableForOrder && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-green/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Disponível para encomenda
                </span>
            )}

            <div className="aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={340}
                    height={340}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="space-y-2 p-4">
                <h3 className="line-clamp-1 text-center text-lg font-semibold text-brand-brown">{name}</h3>

                {description && (
                    <p className="line-clamp-2 text-center text-sm text-gray-600">{description}</p>
                )}

                <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="text-xl font-bold text-brand-brown">{price}</span>
                    {unitLabel && (
                        <span className="text-xs text-gray-500">• {unitLabel}</span>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-brand-rose/20 px-3 py-1 text-xs font-medium text-brand-brown">
                        Mais pedido da casa
                    </span>
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Chamar no WhatsApp"
                        aria-label={`Chamar no WhatsApp sobre ${name}`}
                        className="inline-flex items-center justify-center rounded-full text-brand-green transition-colors hover:text-brand-rose"
                    >
                        <BiLogoWhatsapp size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

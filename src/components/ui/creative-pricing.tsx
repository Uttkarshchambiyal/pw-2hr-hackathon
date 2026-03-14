import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

export function CreativePricing({
    tag = "Skyline Audio Pricing",
    title = "Premium Sound, Accessible Tiers",
    description = "Choose the gear that fits your lifestyle",
    tiers,
    onBack,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
    onBack?: () => void;
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {onBack && (
                <Button 
                    variant="ghost" 
                    className="mb-8 text-neutral-400 hover:text-white dark:hover:bg-neutral-800"
                    onClick={onBack}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Collection
                </Button>
            )}
            <div className="text-center space-y-6 mb-16">
                <div className="font-handwritten text-xl text-orange-400 rotate-[-1deg] font-semibold">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-bold font-handwritten text-zinc-900 dark:text-white rotate-[-1deg]">
                        {title}
                        <div className="absolute -right-12 top-0 text-amber-500 rotate-12">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-orange-500 -rotate-12">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-orange-500/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className="font-handwritten text-xl text-zinc-600 dark:text-zinc-400 rotate-[-1deg]">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-white dark:bg-zinc-900",
                                "border-2 border-zinc-900 dark:border-neutral-600",
                                "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-neutral-600",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-6">
                            {tier.popular && (
                                <div
                                    className="absolute -top-2 -right-2 bg-amber-400 text-zinc-900 
                                    font-handwritten font-bold px-3 py-1 rounded-full rotate-12 text-sm border-2 border-zinc-900"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-full mb-4",
                                        "flex items-center justify-center",
                                        "border-2 border-zinc-900 dark:border-neutral-600",
                                        `text-${tier.color}-500`,
                                        "bg-neutral-100 dark:bg-neutral-800"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="font-handwritten text-2xl font-bold text-zinc-900 dark:text-white">
                                    {tier.name}
                                </h3>
                                <p className="font-handwritten text-zinc-600 dark:text-zinc-400 h-10">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6 font-handwritten">
                                <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400 align-top mr-1">
                                    ₹
                                </span>
                                <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                                    {tier.price.toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="space-y-3 mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full border-2 border-zinc-900 
                                            dark:border-white flex items-center justify-center shrink-0"
                                        >
                                            <Check className="w-3 h-3 text-zinc-900 dark:text-white" />
                                        </div>
                                        <span className="font-handwritten text-[15px] font-medium text-zinc-900 dark:text-zinc-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-12 font-handwritten text-lg relative font-bold",
                                    "border-2 border-zinc-900 dark:border-neutral-600",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-neutral-600",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                              "bg-amber-400 text-zinc-900",
                                              "hover:bg-amber-300",
                                              "active:bg-amber-500",
                                          ]
                                        : [
                                              "bg-zinc-50 dark:bg-zinc-800",
                                              "text-zinc-900 dark:text-white",
                                              "hover:bg-zinc-200 dark:hover:bg-zinc-700",
                                              "active:bg-zinc-300 dark:active:bg-zinc-600",
                                          ]
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

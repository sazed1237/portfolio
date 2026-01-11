import { useMemo, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { services } from '../../helpers/servicesData';


const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const CONTACT_TO_EMAIL = 'sazedulislam9126@gmail.com';


const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+880 1786 549 126",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sazedulislam9126@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Mirpur-1, Dhaka, Bangladesh",
    },
]

const Contact = () => {
    const serviceOptions = useMemo(() => services ?? [], []);

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const onChange = (key) => (e) => {
        setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

    const validate = () => {
        if (!form.firstName.trim()) return 'Please enter your first name.';
        if (!form.email.trim()) return 'Please enter your email.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email.';
        if (!form.message.trim()) return 'Please enter a message.';
        return '';
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus({ state: 'idle', message: '' });

        const error = validate();
        if (error) {
            setStatus({ state: 'error', message: error });
            return;
        }

        // If no access key is set, fall back to mailto so the form still “works”.
        if (!WEB3FORMS_ACCESS_KEY) {
            const subject = encodeURIComponent(`Portfolio contact: ${form.firstName} ${form.lastName}`.trim());
            const body = encodeURIComponent(
                [
                    `Service: ${form.service || 'N/A'}`,
                    `Phone: ${form.phone || 'N/A'}`,
                    '',
                    form.message,
                    '',
                    `Reply-to: ${form.email}`,
                ].join('\n')
            );
            window.location.href = `mailto:${CONTACT_TO_EMAIL}?subject=${subject}&body=${body}`;
            return;
        }

        try {
            setStatus({ state: 'loading', message: 'Sending...' });

            const payload = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `New portfolio message from ${form.firstName} ${form.lastName}`.trim(),
                from_name: `${form.firstName} ${form.lastName}`.trim(),
                email: form.email,
                phone: form.phone,
                service: form.service,
                message: form.message,
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok || !data?.success) {
                throw new Error(data?.message || 'Failed to send message.');
            }

            setStatus({ state: 'success', message: 'Message sent successfully.' });
            setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
        } catch (err) {
            setStatus({ state: 'error', message: err?.message || 'Something went wrong.' });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col-reverse lg:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='lg:w-[54%]'>
                        <form onSubmit={onSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-3xl text-accent'>Let's Create Something Amazing</h3>
                            <p className='text-white/60'>Ready to bring your ideas to life? Get in touch!</p>

                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input
                                    name="firstName"
                                    type="text"
                                    placeholder="Firstname"
                                    value={form.firstName}
                                    onChange={onChange('firstName')}
                                    required
                                />
                                <Input
                                    name="lastName"
                                    type="text"
                                    placeholder="Lastname"
                                    value={form.lastName}
                                    onChange={onChange('lastName')}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={onChange('email')}
                                    required
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone"
                                    value={form.phone}
                                    onChange={onChange('phone')}
                                />
                            </div>

                            {/* select */}
                            <Select value={form.service} onValueChange={(value) => setForm((p) => ({ ...p, service: value }))}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        {serviceOptions.map((service) => (
                                            <SelectItem key={service.num} value={service.title}>
                                                {service.title}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here..."
                                value={form.message}
                                onChange={onChange('message')}
                                required
                            />

                            {status.state !== 'idle' && (
                                <p
                                    className={
                                        status.state === 'success'
                                            ? 'text-green-400 text-sm'
                                            : status.state === 'error'
                                                ? 'text-red-400 text-sm'
                                                : 'text-white/60 text-sm'
                                    }
                                >
                                    {status.message}
                                </p>
                            )}

                            {/* button */}
                            <Button
                                size="md"
                                className="max-w-40"
                                type="submit"
                                disabled={status.state === 'loading'}
                            >
                                {status.state === 'loading' ? 'Sending...' : 'Send message'}
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className='flex-1 flex items-center lg:justify-end mb-8 lg:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-4'>
                                        <div className='w-[52px] h-[50px] lg:w-[52px] lg:h-[50px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1 '>
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-sm md:text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
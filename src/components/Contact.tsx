"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = (data: FormData) => {
    setStatus("loading");
    
    const serviceId = "service_q7gtzns";
    const templateId = "template_2u5ueuo";
    const publicKey = "yR5_YHQrmAdt_LIwO";

    const templateParams = {
      user_name: data.user_name,
      user_email: data.user_email,
      message: data.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
              <input 
                {...register("user_name", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              {errors.user_name && <p className="text-red-500 text-sm mt-1">Required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
              <input 
                {...register("user_email", { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              {errors.user_email && <p className="text-red-500 text-sm mt-1">Invalid email</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
              <textarea 
                {...register("message", { required: true })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Required</p>}
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className={`w-full py-4 cursor-pointer rounded-lg font-bold text-white transition-all flex items-center justify-center space-x-2
                ${status === "success" ? "bg-green-600" : status === "error" ? "bg-red-600" : "bg-primary hover:bg-[#4a6b75]"}
              `}
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : status === "success" ? (
                <>
                  <CheckCircle /> <span>{t.contact.success}</span>
                </>
              ) : status === "error" ? (
                <>
                  <XCircle /> <span>{t.contact.error}</span>
                </>
              ) : (
                <>
                  <span>{t.contact.submit}</span> <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

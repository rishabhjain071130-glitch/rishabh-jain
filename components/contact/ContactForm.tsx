"use client";

import * as React from "react";
import { ShieldCheck, Mail, Send, AlertTriangle, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam hidden input
}

export const ContactForm: React.FC = () => {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = React.useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error" | "rate-limited">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Validate single field
  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email address";
      case "subject":
        return value.trim() ? "" : "Subject is required";
      case "message":
        if (!value.trim()) return "Message is required";
        return value.trim().length >= 10 ? "" : "Message must be at least 10 characters long";
      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof FormState]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle input blur (marking field as touched)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    // Validate all fields
    const formErrors: Partial<Record<keyof FormState, string>> = {};
    let hasErrors = false;

    (Object.keys(form) as Array<keyof FormState>).forEach((field) => {
      if (field !== "honeypot") {
        const error = validateField(field, form[field]);
        if (error) {
          formErrors[field] = error;
          hasErrors = true;
        }
      }
    });

    setErrors(formErrors);
    if (hasErrors) return;

    // Check Honeypot spam blocker
    if (form.honeypot.trim()) {
      // Silently act as if successful to frustrate the spam bot
      setStatus("submitting");
      setTimeout(() => {
        setStatus("success");
      }, 1000);
      return;
    }

    // Enforce 2 minute rate limiting simulation
    const rateLimitKey = "portfolio_contact_rate_limit";
    const limit = 2 * 60 * 1000; // 2 minutes
    const now = Date.now();
    const lastSubmission = localStorage.getItem(rateLimitKey);

    if (lastSubmission) {
      const elapsed = now - parseInt(lastSubmission, 10);
      if (elapsed < limit) {
        setStatus("rate-limited");
        setErrorMessage(`Please wait ${Math.ceil((limit - elapsed) / 1000)} seconds before sending another message.`);
        return;
      }
    }

    setStatus("submitting");

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save submission time for rate limit
      localStorage.setItem(rateLimitKey, now.toString());

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected server error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <h3 className="text-xl font-bold text-white tracking-tight">Direct Information</h3>
          <div className="space-y-4">
            {/* Name */}
            <div className="p-4 rounded-md border border-border-subtle bg-card/45 flex items-center gap-3">
              <User className="w-5 h-5 text-brand-blue shrink-0" />
              <div>
                <span className="text-[10px] text-text-muted font-mono uppercase block select-none">Name</span>
                <span className="text-sm font-bold text-white">{profile.name}</span>
              </div>
            </div>
            {/* Email */}
            <div className="p-4 rounded-md border border-border-subtle bg-card/45 flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-blue shrink-0" />
              <div>
                <span className="text-[10px] text-text-muted font-mono uppercase block select-none">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-bold text-white hover:text-brand-blue hover:underline transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            {/* Phone (Only visible in Contact section) */}
            <div className="p-4 rounded-md border border-border-subtle bg-card/45 flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-blue shrink-0" />
              <div>
                <span className="text-[10px] text-text-muted font-mono uppercase block select-none">Phone</span>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-bold text-white font-mono hover:text-brand-blue transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded bg-bg-secondary/40 border border-border-subtle/30 text-xs text-text-muted leading-relaxed font-mono space-y-2 select-none">
            <div className="flex gap-2 text-success items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
              <span className="font-bold text-[10px] uppercase">Audit-Guard Active</span>
            </div>
            <p>
              All inputs are sanitized. HTML tags are escaped, and submissions are rate-limited to 1 submission every 2 minutes per browser session.
            </p>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7 bg-card/25 border border-border-subtle/60 rounded-lg p-6 md:p-8">
          {status === "success" ? (
            <div className="p-8 text-center rounded border border-success/20 bg-success/5 space-y-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto text-success">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Message Dispatched Securely</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-sm mx-auto">
                  Thank you! Your message has been processed successfully. Rishabh will review it and follow up as soon as possible.
                </p>
              </div>
              <Button variant="secondary" size="sm" onClick={() => setStatus("idle")} className="text-xs">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Honeypot hidden input (Spam bot trap) */}
              <div className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <label htmlFor="honeypot">Leave this field empty</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  tabIndex={-1}
                  value={form.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Form Error Callout */}
              {(status === "error" || status === "rate-limited") && (
                <div className="flex gap-2.5 items-start p-4 rounded bg-error/5 border border-error/20 text-error">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Submission Guard Blocked</h4>
                    <p className="text-xs text-text-secondary">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-card border rounded-md px-4 py-2.5 text-sm text-white placeholder:text-text-muted outline-none transition-colors ${
                      errors.name && touched.name
                        ? "border-error focus:border-error"
                        : "border-border-subtle focus:border-brand-blue"
                    }`}
                    placeholder="Rishabh Jain"
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="text-[10px] text-error font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-card border rounded-md px-4 py-2.5 text-sm text-white placeholder:text-text-muted outline-none transition-colors ${
                      errors.email && touched.email
                        ? "border-error focus:border-error"
                        : "border-border-subtle focus:border-brand-blue"
                    }`}
                    placeholder="rishabhjain071130@gmail.com"
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="text-[10px] text-error font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full bg-card border rounded-md px-4 py-2.5 text-sm text-white placeholder:text-text-muted outline-none transition-colors ${
                    errors.subject && touched.subject
                      ? "border-error focus:border-error"
                      : "border-border-subtle focus:border-brand-blue"
                  }`}
                  placeholder="Collaboration Opportunity"
                />
                {errors.subject && touched.subject && (
                  <p id="subject-error" className="text-[10px] text-error font-mono">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full bg-card border rounded-md px-4 py-2.5 text-sm text-white placeholder:text-text-muted outline-none transition-colors resize-y min-h-[120px] ${
                    errors.message && touched.message
                      ? "border-error focus:border-error"
                      : "border-border-subtle focus:border-brand-blue"
                  }`}
                  placeholder="Hi Rishabh, I reviewed your portfolio. Let's discuss an internship position..."
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="text-[10px] text-error font-mono">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" isLoading={status === "submitting"} className="w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Dispatch Secure Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

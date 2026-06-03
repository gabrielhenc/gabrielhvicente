"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function SpeakingFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

setIsSubmitting(true);
setStatus("idle");

const form = event.currentTarget;

const formData = new FormData(form);

const payload = {
nome: formData.get("nome"),
empresa: formData.get("empresa"),
dataPrevista: formData.get("dataPrevista"),
email: formData.get("email"),
whatsapp: formData.get("whatsapp"),
evento: formData.get("evento"),
participantes: formData.get("participantes"),
tema: formData.get("tema"),
mensagem: formData.get("mensagem"),
};

try {
const response = await fetch("/api/contact", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(payload),
});

```
if (response.status === 200) {
  setStatus("success");
  form.reset();
} else {
  setStatus("error");
}
```

} catch (error) {
console.error(error);
setStatus("error");
} finally {
setIsSubmitting(false);
}
}

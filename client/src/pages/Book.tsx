import { Card } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function Book() {
  return (
    <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
          <p className="text-muted-foreground">
            Take the first step towards your new tattoo. Fill out the form below and
            we'll get back to you to confirm your appointment.
          </p>
        </div>

        <Card className="p-6">
          <BookingForm />
        </Card>
      </motion.div>
    </div>
  );
}

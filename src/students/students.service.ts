import { Injectable } from '@nestjs/common';
import { Student } from './students.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentsService {

    constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

    async getStudents(): Promise<Student[]> {
        return this.studentModel.find().exec()
    }

    async getOneStudent(id: string): Promise<Student> {
        return this.studentModel.findById(id).exec()
    }

    async createStudent(body): Promise<Student> {
        const newStudent = new this.studentModel({
            name: body.name,
            password: body.password
        });

        return newStudent.save();
    }

    updateStudent(id: string, body): string {
        this.studentModel.findByIdAndUpdate(id, body).exec();

        return 'Student updated successfully'
    }

    deleteStudent(id: string): string {
        this.studentModel.findByIdAndDelete(id).exec();

        return 'Student deleted successfully'
    }
}

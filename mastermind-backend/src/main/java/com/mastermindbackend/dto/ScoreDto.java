package com.mastermindbackend.dto;

public class ScoreDto {
    int level;
    int rowCount;
    long startingTime;
    long finishTime;
    public ScoreDto() {}
    public ScoreDto(int level, int rowCount, long startingTime, long finishTime) {
        this.level = level;
        this.rowCount = rowCount;
        this.startingTime = startingTime;
        this.finishTime = finishTime;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public long getStartingTime() {
        return startingTime;
    }

    public void setStartingTime(long startingTime) {
        this.startingTime = startingTime;
    }

    public long getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(long finishTime) {
        this.finishTime = finishTime;
    }

    public int getRowCount() {
        return rowCount;
    }

    public void setRowCount(int rowCount) {
        this.rowCount = rowCount;
    }

    @Override
    public String toString() {
        return "ScoreDto{" +
                "level=" + level +
                ", rowCount=" + rowCount +
                ", startingTime=" + startingTime +
                ", finishTime=" + finishTime +
                '}';
    }
}
